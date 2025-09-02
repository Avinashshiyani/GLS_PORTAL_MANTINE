import {
  Button,
  Center,
  Flex,
  Grid,
  GridCol,
  Paper,
  Select,
  Space,
  Stack,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const GenerateReport = () => {
  const handleSubmit = (values: typeof form.values) => {
    console.log("Form Submitted:", values);
  };

  const form = useForm({
    initialValues: {
      department: "",
      subject: "",
      faculty: "",
      startDate: "",
      endDate: "",
    },
    validate: {
      department: (value: string) => (value ? null : "Select a department"),
      subject: (value: string) => (value ? null : "Select a subject"),
      faculty: (value: string) => (value ? null : "Select a faculty"),
      startDate: (value: string) => (value ? null : "Select start date"),
      endDate: (value: string) => (value ? null : "Select end date"),
    },
  });

  return (
    <div>
      <Center style={{ minHeight: "100vh", backgroundColor: "#f7f7f9" }}>
        <Grid gutter="xl" w="95%" justify="center">
          {/* Form Row */}
          <GridCol span={12}>
            <Title
              style={{
                fontSize: "20px",
                padding: "8px",
                fontWeight: "inherit",
              }}
            >
              Generate Report
            </Title>
            <Center>
              <Paper
                shadow="lg"
                radius="lg"
                p="xl"
                withBorder
                style={{ maxWidth: 450, width: "100%", marginTop: "20px" }}
              >
                <Title order={3} my={"sm"} ta="center" c="blue">
                  Generate Report
                </Title>

                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Stack gap="md">
                    <Select
                      label="Select Subject"
                      placeholder="Choose Subject"
                      data={subjects}
                      {...form.getInputProps("subject")}
                    />

                    <Select
                      label="Select Faculty"
                      placeholder="Choose Faculty"
                      data={faculties}
                      {...form.getInputProps("faculty")}
                    />

                    <Select
                      label="Select Semester"
                      placeholder="Choose Semester"
                      data={faculties}
                      {...form.getInputProps("faculty")}
                    />

                    <Select
                      label="Select Division"
                      placeholder="Choose Division"
                      data={faculties}
                      {...form.getInputProps("faculty")}
                    />
                    <Flex>
                      <Button type="submit" fullWidth mt="sm" size="md">
                        Download Pdf
                      </Button>
                      <Space w={"sm"} />
                      <Button type="submit" fullWidth mt="sm" size="md">
                        Export Excel
                      </Button>
                    </Flex>
                  </Stack>
                </form>
              </Paper>
            </Center>
          </GridCol>

          {/* Table Row
          <GridCol span={12}>
            <Paper shadow="sm" radius="md" p="lg" withBorder>
              <Title order={4} mb="md" c="dimmed">
                Schedule List
              </Title>
              <CreateScheduleTable />
            </Paper>
          </GridCol> */}
        </Grid>
      </Center>
    </div>
  );
};

export default GenerateReport;

// const departments = [
//   { value: "cs", label: "Computer Science" },
//   { value: "ee", label: "Electrical Engineering" },
//   { value: "me", label: "Mechanical Engineering" },
// ];

const subjects = [
  { value: "math", label: "Mathematics" },
  { value: "physics", label: "Physics" },
  { value: "chem", label: "Chemistry" },
];

const faculties = [
  { value: "john", label: "John Doe" },
  { value: "jane", label: "Jane Smith" },
  { value: "bob", label: "Bob Johnson" },
];
