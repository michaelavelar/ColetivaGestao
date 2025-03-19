import { Container, Grid, Typography, IconButton } from "@mui/material";
import { LinkedIn, Instagram } from "@mui/icons-material";

const teamMembers = [
  {
    name: "Nome da Pessoa 1",
    image: "https://source.unsplash.com/random/200x200",
    description: "Breve descrição sobre a pessoa 1.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Nome da Pessoa 2",
    image: "https://source.unsplash.com/random/200x200",
    description: "Breve descrição sobre a pessoa 2.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Nome da Pessoa 3",
    image: "https://source.unsplash.com/random/200x200",
    description: "Breve descrição sobre a pessoa 3.",
    linkedin: "#",
    instagram: "#",
  },
];

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bem vindo(a) ao Instituto Coletiva!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
            <img
              src={member.image}
              alt={member.name}
              style={{ width: "100%", borderRadius: "50%" }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {member.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              {member.description}
            </Typography>
            <IconButton href={member.linkedin} target="_blank" color="primary">
              <LinkedIn />
            </IconButton>
            <IconButton href={member.instagram} target="_blank" color="secondary">
              <Instagram />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
