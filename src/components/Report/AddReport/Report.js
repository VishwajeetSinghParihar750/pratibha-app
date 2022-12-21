import React from "react";

function Report(props) {
  return (
    <div>
      <div>
        <h2>Report Creation</h2>
      </div>
      <div>
        {/* for steps */}
        <div>
          <div>Step1</div>
          <div>Step2</div>
        </div>

        <div>
          <div>
            <div>Select Asset</div>
            <div>
              <select name="assetName" id="">
                <option value="Asset1">Asset1</option>
                <option value="Asset2">Asset2</option>
                <option value="Asset3">Asset3</option>
                <option value="Asset4">Asset4</option>
              </select>
            </div>
          </div>

          {/* for description */}
          <div>
            <div>Description</div>
            <div>
              <div>
                <div>
                  <div>
                    <p>20</p>
                  </div>
                  <div>Total</div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Report;
