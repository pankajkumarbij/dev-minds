export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto text-center">
        <p className="text-white">
          © {new Date().getFullYear()} DevMinds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
