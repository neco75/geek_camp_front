import Main from "@/components/Main";
export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-4xl text-center mt-5">App-name</h1>
        <div className="text-center mt-5">
          <p>ランダムに旅先を決めるアプリです</p>
        </div>
        <Main />
      </main>
    </>
  );
}
