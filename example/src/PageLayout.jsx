const PageLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">Header</header>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px]">
        {/* Left Sidebar */}
        <aside className="bg-gray-100 p-4">Left Sidebar</aside>

        {/* Main Content */}
        <main className="p-4">
          Main Content
          <div className="bg-green-50 ">Very light</div>
          <div className="bg-green-100">Normal</div>
          <div className="bg-green-200">Very dark</div>
          <div className="bg-green-300">Very light</div>
          <div className="bg-green-400">Normal</div>
          <div className="bg-green-500">Very dark</div>
          <div className="bg-green-600">Very dark</div>
          <div className="bg-green-700">Very dark</div>
          <div className="bg-green-800">Very dark</div>
          <div className="bg-green-900">Very dark</div>
          <div className="bg-green-950">Very dark</div>
          <button className="bg-danger">button</button>
        </main>

        {/* Right Sidebar */}
        <aside className="bg-gray-100 p-4">Right Sidebar</aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">Footer</footer>
    </div>
  )
}

export default PageLayout
