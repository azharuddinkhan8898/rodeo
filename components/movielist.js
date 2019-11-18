import Link from "next/link";

export default function Movielist(props) {
  console.log(props);
  const movies = props.movies.map(el => {
    console.log(el);
    return (
      <div key={el.Title + "-" + el.Year}>
        <div className="col m4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                style={{ maxHeight: 400 }}
                className="activator"
                src={el.Poster}
                alt=""
              />
            </div>
            <div className="card-content">
              <span
                className="card-title activator grey-text text-darken-4"
                style={{ height: 63, overflow: "hidden" }}
              >
                {el.Title} - {el.Year}
              </span>
              <p>
                <Link href={`/details?id=${el.imdbID}`}>
                  <a>More details</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  console.log(movies);
  return <div>{movies}</div>;
}
