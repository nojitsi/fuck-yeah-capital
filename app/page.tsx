import {getUserByEmail} from "@/lib/data";
import Intro from "@/components/custom/intro";

export default async function Home() {
  const user = await getUserByEmail('default@example.com');

  return (<Intro user={user} /> )
}
