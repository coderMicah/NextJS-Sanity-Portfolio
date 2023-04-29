import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == "experience"]{
  ...,
  technologies[]->
}`;

export async function GET() {
  const experiences = await sanityClient.fetch(query);
  return NextResponse.json(experiences);
}
