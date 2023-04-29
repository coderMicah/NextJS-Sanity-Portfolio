import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == "page"][0]`;

export async function GET() {
  const pages = await sanityClient.fetch(query);
  return NextResponse.json(pages);
}
