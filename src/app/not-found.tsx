import Link from "next/link";

const Custom404 = () => {
  return (
    <main>
      <div className="h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-[45px]">404 - Sidan finns inte</h1>
        <Link href="https://github.com/bastakom/bk/blob/master/app/%5Blang%5D/%5Bslug%5D/page.tsx"></Link>
        <Link href="/">Gå till startsidan</Link>
      </div>
    </main>
  );
};

export default Custom404;
