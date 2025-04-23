import { Box, Typography } from "@mui/material";

const Sales_Card = () => {
  const data = [
    {
      icon: "/icon.png",
      amount: "$1k",
      title: "total sales",
      description: "+8% from yesterday",
    },
    {
      icon: "/icon1.png",
      amount: "300",
      title: "total order",
      description: "+5% from yesterday",
    },
    {
      icon: "/icon2.png",
      amount: "5",
      title: "product sold",
      description: "+12% from yesterday",
    },
    {
      icon: "/icon3.png",
      amount: "8",
      title: "new customers",
      description: "+0.5% from yesterday",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "110px", sm: "170px" },
            bgcolor: "#FFE2E5",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: { xs: 1, sm: 2 },
          }}
        >
          <Box
            component="img"
            src={item.icon}
            sx={{ width: "30px", height: "30px" }}
            mb={1}
          />
          <Typography
            fontWeight="bold"
            fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
            mb={0.5}
          >
            {item.amount}
          </Typography>
          <Typography
            fontSize={{ xs: "12px", sm: "14px" }}
            color="textSecondary"
            mb={0.5}
          >
            {item.title}
          </Typography>
          <Typography color="#4079ED" fontSize={{ xs: "10px", sm: "12px" }}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default Sales_Card;
