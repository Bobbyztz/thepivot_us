import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key for API routes
)

export async function GET() {
  try {
    // Get the likes count from the likes table
    const { data, error } = await supabase
      .from('likes')
      .select('count')
      .single()
    
    if (error) throw error;
    
    return NextResponse.json({ likes: data?.count || 0 });
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
    // Update the likes count using SQL increment
    const { data, error } = await supabase.rpc('increment_likes')
    
    if (error) throw error;
    
    return NextResponse.json({ likes: data });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to update likes" },
      { status: 500 }
    );
  }
}
