import React from 'react';

const MyEvents = () => {
  const pendingInvites = [
    { title: "ABC", type: "Baby Shower", owner: "Albus Dumbeldore", sdate: "15 Apr 2023", edate: "15 Apr 2023" },
    { title: "DEF", type: "Graduation", owner: "Beatrix Lestrange", sdate: "20 Apr 2023", edate: "20 Apr 2023" },
    { title: "GHI", type: "Trip", owner: "Colin Creevey", sdate: "28 Apr 2023", edate: "5 May 2023" },
    { title: "JKL", type: "Birthday", owner: "Draco Malfoy", sdate: "5 May 2023", edate: "5 May 2023" },
  ];
  return (
    <div className="main">
      <div class="row">
        <div class="event-list"><p><span class="event-list">PENDING INVITES</span></p></div>
        {pendingInvites.map((app) => <App type={app.type} title={app.title} owner={app.owner} sdate={app.sdate} edate={app.edate} />)}
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div class="card">
      <div class="card-content">
        <div class="media">
          {/*       === For event type image ===   
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="img-link" alt="Placeholder image"></img>
            </figure>
          </div> */}
          <div class="media-content">
            <p class="title is-4">{props.title}</p>
            <p class="subtitle is-6">({props.type})</p>
            <p class="subtitle is-6">Event Owner: <b>{props.owner}</b></p>
            <p class="subtitle is-6"> Starts on <b>{props.sdate}</b> and ends on <b>{props.edate}</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyEvents;