import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../global/theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates odio corrupti cupiditate nemo? Ex esse dignissimos iure
          nisi quod delectus natus corporis animi, ad iusto earum quam
          consequuntur inventore?
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates odio corrupti cupiditate nemo? Ex esse dignissimos iure
          nisi quod delectus natus corporis animi, ad iusto earum quam
          consequuntur inventore?
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates odio corrupti cupiditate nemo? Ex esse dignissimos iure
          nisi quod delectus natus corporis animi, ad iusto earum quam
          consequuntur inventore?
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates odio corrupti cupiditate nemo? Ex esse dignissimos iure
          nisi quod delectus natus corporis animi, ad iusto earum quam
          consequuntur inventore?
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Fav Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates odio corrupti cupiditate nemo? Ex esse dignissimos iure
          nisi quod delectus natus corporis animi, ad iusto earum quam
          consequuntur inventore?
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates odio corrupti cupiditate nemo? Ex esse dignissimos iure
          nisi quod delectus natus corporis animi, ad iusto earum quam
          consequuntur inventore?
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
