import React from "react";

const listMenu = React.memo(props => {
  const {img, nama, harga, info} = props.menu;
  const {convertRupiah} = props.value;

  return (
    <React.Fragment>
      <div className="card mb-4" style={{ border: "transparent" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={img} className="card-img img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body p-0 ml-4 mr-2">
              <div className="d-flex justify-content-between">
                <h5 className="card-title" style={{ fontSize: "1.4rem" }}>
                  {nama}
                </h5>
                <p className="card-text" style={{ fontSize: "1rem" }}>
                  Rp. <strong>{convertRupiah(harga)}</strong>
                </p>
              </div>

              <p className="card-text">
                <small className="text-muted">{info}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

export default listMenu;
