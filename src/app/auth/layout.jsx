export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen">
     
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-100 to-teal-100 text-teal-100 flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-600">Welcome to TechPath 🚀</h1>
        <p className="text-lg text-teal-600">
          Empowering new techies to discover their ideal career paths.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50">
        {children}
      </div>
</div>
);
}