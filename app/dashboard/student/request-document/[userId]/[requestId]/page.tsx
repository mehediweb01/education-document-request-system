const RequestReport = async ({ params }: { params: { requestId: string } }) => {
  const { requestId } = await params;

  return (
    <div>
      <h1>request page</h1>
    </div>
  );
};

export default RequestReport;
