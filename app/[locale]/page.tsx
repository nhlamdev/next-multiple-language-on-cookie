import { ChangeLangComponent } from "@/components";
import { getDictionary } from "@/language";
import Link from "next/link";

export default async function Home(props: any) {
  const dict = await getDictionary(
    props.params.locale ? props.params.locale : "vi"
  );
  return (
    <main>
      <span>{dict.products.cart}</span>
      <ChangeLangComponent />
    </main>
  );
}
