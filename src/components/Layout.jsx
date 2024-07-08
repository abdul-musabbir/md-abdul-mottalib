import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="text-white">{children}</div>
    </div>
  );
}
