function ColorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>Layout colors</p>
      {children}
      <p>Layout colors</p>
    </div>
  );
}

export default ColorsLayout;
