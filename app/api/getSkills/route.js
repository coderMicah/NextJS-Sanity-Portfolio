import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == "skill"]`;

export async function GET() {
  const skills = await sanityClient.fetch(query);
  return NextResponse.json(skills);
}
