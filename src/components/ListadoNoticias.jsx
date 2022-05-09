import { Grid, Pagination, Stack, Typography } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        component={"h2"}
        variant={"h3"}
      >
        Últimas Noticias
      </Typography>
      <Grid 
        container
        spacing={2}
      >
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
         ))}

      </Grid>
      <Stack 
        sx={{marginTop: 5}}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Pagination 
          count={totalPaginas} 
          color="secondary" 
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
