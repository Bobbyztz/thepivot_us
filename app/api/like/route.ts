import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

async function ensureFileExists() {
  const filePath = path.join(process.cwd(), "public/data/likes.json");
  try {
    await fs.access(filePath);
  } catch {
    // File doesn't exist, create it with initial data
    await fs.mkdir(path.join(process.cwd(), "public/data"), {
      recursive: true,
    });
    await fs.writeFile(filePath, JSON.stringify({ likes: 0 }));
  }
  return filePath;
}

export async function GET() {
  try {
    const filePath = await ensureFileExists();
    const data = await fs.readFile(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const filePath = await ensureFileExists();
    const data = await fs.readFile(filePath, "utf8");
    const likes = JSON.parse(data);
    likes.likes += 1;
    await fs.writeFile(filePath, JSON.stringify(likes));
    return NextResponse.json(likes);
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to update likes" },
      { status: 500 }
    );
  }
}
