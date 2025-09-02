import { Button, Center, Flex } from "@mantine/core";
import { Link } from "react-router";

const Feedback = () => {
  return (
    <Center h={400}>
      <p className="text-[20px]">Choose An Option : &nbsp;</p>
      <Flex
        gap={"xl"}
        justify={"center"}
        align={"center"}
        direction={"row"}
        wrap={"wrap"}
        h={205}
        miw={200}
      >
        <Link to={"createschedule"}>
          <Button h={40} w={230}>
            Create Schedule
          </Button>
        </Link>
        <Link to={"viewfeedback"}>
          <Button h={40} w={230}>
            View Feedback
          </Button>
        </Link>
        <Link to={"generatereport"}>
          <Button h={40} w={230}>
            Generate Report
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};

export default Feedback;
