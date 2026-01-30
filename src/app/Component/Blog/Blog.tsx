import Header from "../HeaderSection/Header";

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4">Your blog content here...</p>
      </div>
    </div>
  );
}
