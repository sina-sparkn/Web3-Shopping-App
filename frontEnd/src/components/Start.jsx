import a2 from "../assets/svg/Asset 3.svg";

const Start = () => {
  return (
    <main className="mt-10 h-full px-16 flex flex-col items-center gap-5 bg-gradient-to-b from-black to-violet-700">
      <img src={a2} className="w-2/5" />
      <div className="bg-white/10 mt-5 h-0.5 w-full"></div>
      <section className="w-full flex flex-col items-start">
        <p className="text-white text-2xl w-4/5">
          MOONINK is a Web3 online Store which you Can buy any thing you want
          and let ethereum blockChain tell what you bought and we will send your
          purchases to you.
        </p>
      </section>
    </main>
  );
};

export default Start;
