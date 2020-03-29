import { connect } from "react-redux";

import { IState } from "../../reducers";
import { InventoryInfoComponent } from "./InventroyInfoComponent";
​
​
​
const mapStateToProps = (state:IState) => {
    return {
  
    }
}
​
export default connect(mapStateToProps)(InventoryInfoComponent)