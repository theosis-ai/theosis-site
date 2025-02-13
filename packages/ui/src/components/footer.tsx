export default function Footer() {
  return (
      <footer>
        <p className="items-center flex flex-col text-xs p-12">
          © {new Date().getFullYear()} Theosis AI
        </p>
      </footer>
  );
}
