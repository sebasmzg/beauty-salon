import { GET } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"

export default async function Page() {
  const session = await getServerSession(GET)
  console.log("session", session);

  return <pre>{JSON.stringify(session, null, 2)}</pre>
}