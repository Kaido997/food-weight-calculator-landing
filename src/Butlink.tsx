function Butlink(arg: { children: string, link: string }) {
  return (
    <>
      <button
        onClick={() => {
          window.open(arg.link, '_blank')
        }}
      >
        {arg.children}
      </button>
    </>
  );
}
export default Butlink;
