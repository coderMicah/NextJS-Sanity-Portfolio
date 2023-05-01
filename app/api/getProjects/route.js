import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == "project"]{
  ...,
  "technologies": technologies[]->{
    "image": image.asset->url
  }
}`

export async function GET() {
  const projects = await sanityClient.fetch(query);
  return NextResponse.json(projects);
}
