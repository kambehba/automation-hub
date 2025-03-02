"use client";
function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Automation Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
          <p className="text-3xl font-bold">127</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold">$45,678</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
          <p className="text-3xl font-bold">2</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 text-center mt-10">
        <p className="max-w-2xl text-2xl font-semibold leading-relaxed">
          <span className="text-red-500">Welcome to my Automation Hub!</span>
          <br />
          <span className="text-blue-500">
            Here, I showcase my latest projects and cutting-edge technologies in
            industrial automation, PLC programming, and industrial electronics.
          </span>
          <br />
          <span className="text-green-500">
            With expertise in security systems, as well as commercial and
            residential electrical design and execution, I bring innovative
            solutions to every challenge.
          </span>
          <br />
          <span className="text-purple-500">
            Explore my work and stay updated on the future of automation!
          </span>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
