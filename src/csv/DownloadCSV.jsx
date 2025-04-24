
const DownloadCSV = ({ data, filename }) => {
  const download = () => {
    const csvString = [
      ["ID", "Name", "Sales $", "Region", "Last Activity"],
      ...data.map(item => [
        item.id,
        item.name,
        item.sales,
        item.region,
        item.lastActivity
      ])
    ]
      .map(row => row.join(","))
      .join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return download();
};

