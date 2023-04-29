import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == "social"]`;

export async function GET() {
  const socials = await sanityClient.fetch(query);
  return NextResponse.json(socials);
}
