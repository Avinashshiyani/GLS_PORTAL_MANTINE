import {
  Avatar,
  Badge,
  Button,
  Center,
  Grid,
  GridCol,
  Group,
  Select,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router";

const ViewFeedBack = () => {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Select
          data={rolesData}
          defaultValue={item.role}
          variant="unstyled"
          allowDeselect={false}
        />
      </Table.Td>
      <Table.Td>
        <Center>
          {item.active ? (
            <Badge variant="light">Active</Badge>
          ) : (
            <Badge color="gray" variant="light">
              Disabled
            </Badge>
          )}
        </Center>
      </Table.Td>
      <Table.Td>
        <Link to={"feedbackreview"}>
          <Button>View</Button>
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Center style={{ minHeight: "100vh", backgroundColor: "#f7f7f9" }}>
      <Grid gutter="md" w={900} justify="center">
        {/* Left aligned title */}
        <GridCol span={12}>
          <Title
            order={2}
            style={{
              fontSize: "20px",
              padding: "8px 0",
              fontWeight: 600,
              textAlign: "left", // ensures left alignment
            }}
          >
            View Feedback
          </Title>
        </GridCol>

        <GridCol span={12}>
          <Table.ScrollContainer
            minWidth={800}
            style={{
              width: "100%",
              backgroundColor: "white",
              padding: "30px",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Faculty</Table.Th>
                  <Table.Th>Role</Table.Th>
                  <Table.Th>Feedback Status</Table.Th>
                  <Table.Th>Check</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </GridCol>
      </Grid>
    </Center>
  );
};

export default ViewFeedBack;

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Jatin Modh",
    job: "Engineer",
    email: "jatinmodh@gmail.com",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
    lastActive: "6 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
    lastActive: "5 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
    lastActive: "3 days ago",
    active: false,
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];
