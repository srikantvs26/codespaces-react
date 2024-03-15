function Address() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Email</th>
              <td>
                <a
                  href="mailto:srikantvs26@gmail.com"
                  className="text-decoration-none"
                >
                  srikantvs26@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Phone</th>
              <td>
                <a href="tel:+919886652951" className="text-decoration-none">
                  +91-9886652951
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>#1/12 Victoria Road, Bangalore</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Address;
