import css from "./GoBack.module.css";
import {ReactComponent as Arrow} from "../../../assets/icons/goBack.svg";

const GoBack = () => {
  // state = {
  //   movie: {},
  //   genres: [],
  //   from: "/",
  // };

  // async componentDidMount() {
  //   const movieId = this.props.match.params.movieId;

  //   const response = await ApiMovies.MovieDetails(movieId);
  //   this.setState({
  //     movie: response,
  //     genres: [...response.genres],
  //     from: this.props.location.state ? this.props.location.state.from : "/",
  //   });
  // }
  // handleGoBack = () => {
  // const {  history } = this.props;
  // history.push(this.state.from || "/");
  // };
  return (
    <>
    <button type="button" className={css.goBack}>
      <Arrow className={css.arrowSvg}/>
       <p>Вернуться на главную</p>
    </button>
     {/* <Suspense fallback={<h2>Loading...</h2>}>
     <Switch>
       <Route
         exact
         path={`${this.props.match.path}/cast`}
         component={Cast}
       />

       <Route
         exact
         path={`${this.props.match.path}/reviews`}
         component={Reviews}
       />
     </Switch>
     </Suspense> */}
     </>
  );
}

export default GoBack;