function Butlink(arg: { title: string; greetings: string }) {
  return (
    <>
      <button
        onClick={() => {
          alert(arg.greetings);
        }}
      >
        {arg.title.toUpperCase()}
      </button>
    </>
  );
}
export default Butlink;
