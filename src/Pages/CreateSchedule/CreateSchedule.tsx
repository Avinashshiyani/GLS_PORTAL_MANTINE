import {
  Button,
  Center,
  Grid,
  GridCol,
  Select,
  Stack,
  Title,
  Paper,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { CreateScheduleTable } from "./CreateScheduleTable";

const CreateScheduleForm = () => {
  const departments = [
    { value: "cs", label: "Computer Science" },
    { value: "ee", label: "Electrical Engineering" },
    { value: "me", label: "Mechanical Engineering" },
  ];

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

  const handleSubmit = (values: typeof form.values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Center style={{ minHeight: "100vh", backgroundColor: "#f7f7f9" }}>
      <Grid gutter="xl" w="95%" justify="center">
        {/* Form Row */}
        <GridCol span={12}>
          <Title
            style={{ fontSize: "20px", padding: "8px", fontWeight: "inherit" }}
          >
            FeedBacks
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
                Create Schedule
              </Title>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <Select
                    label="Select Department"
                    placeholder="Choose Department"
                    data={departments}
                    {...form.getInputProps("department")}
                  />

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
                    label="Select Start Date"
                    placeholder="Start Date"
                    {...form.getInputProps("startDate")}
                  />

                  <Select
                    label="Select End Date"
                    placeholder="End Date"
                    {...form.getInputProps("endDate")}
                  />

                  <Button type="submit" fullWidth mt="sm" size="md">
                    Create
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Center>
        </GridCol>

        {/* Table Row */}
        <GridCol span={12}>
          <Paper shadow="sm" radius="md" p="lg" withBorder>
            <Title order={4} mb="md" c="dimmed">
              Schedule List
            </Title>
            <CreateScheduleTable />
          </Paper>
        </GridCol>
      </Grid>
    </Center>
  );
};

export default CreateScheduleForm;
