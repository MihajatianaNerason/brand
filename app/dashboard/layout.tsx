function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>layout Dashboard</p>
      {children}
      <p>layout Dashboard</p>
    </div>
  );
}

export default DashboardLayout;
