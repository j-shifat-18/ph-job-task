import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddCarForm from "@/app/Components/AddCarFrom";


export default async function ListCarPage() {
  const session = await getServerSession(authOptions);

  // DEBUG: log session to check
  console.log("Server session:", session);

  if (!session) {
    redirect("/signin");
  }

  if (session.user.role !== "owner") {
    redirect("/"); // redirect non-owner
  }

  return <AddCarForm />;
}
