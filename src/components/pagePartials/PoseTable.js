import React from "react"
import { POSITION_NAMES_LIST } from "../../hexapod"


////////////////////////////////////
import { StartFirebase } from "../../firebase-config";
import { getDatabase, ref, set, get, update, remove, child } from "firebase/database";

StartFirebase();

const db = getDatabase();

///////////////////////////////////


const POSITION_ALIAS = {
    rightMiddle: "rm",
    rightFront: "rf",
    leftFront: "lf",
    leftMiddle: "lm",
    leftBack: "lb",
    rightBack: "rb",
}

const formatPose = pose =>
    POSITION_NAMES_LIST.reduce((formattedPose, position) => {
        const alias = POSITION_ALIAS[position]
        const { alpha, beta, gamma } = pose[position]
        formattedPose[alias] = {
            alpha: Number(alpha).toFixed(2),
            beta: Number(beta).toFixed(2),
            gamma: Number(gamma).toFixed(2),
        }
        return formattedPose
    }, {})

////////////////////////////////////////////
const formatPoseFireBase = pose =>
    POSITION_NAMES_LIST.reduce((formattedPose, position) => {
        const alias = POSITION_ALIAS[position]
        const { alpha, beta, gamma } = pose[position]
        formattedPose[alias] = {
            alpha: Number(Number(alpha).toFixed(2)),
            beta: Number(Number(beta).toFixed(2)),
            gamma: Number(Number(gamma).toFixed(2)),
        }
        return formattedPose
    }, {})
/////////////////////////////////

const PoseTable = ({ rm, rf, lf, lm, lb, rb }) => (
    <table>
        <thead>
            <tr>
                <th>POSITION</th>
                <th>ALPHA</th>
                <th>BETA</th>
                <th>GAMMA</th>
            </tr>
        </thead>
        <tbody>
            <TableRow label="rightMiddle" leg={rm} />
            <TableRow label="rightFront" leg={rf} />
            <TableRow label="leftFront" leg={lf} />
            <TableRow label="leftMiddle" leg={lm} />
            <TableRow label="leftBack" leg={lb} />
            <TableRow label="rightBack" leg={rb} />
        </tbody>
    </table>
)

const TableRow = ({ label, leg }) => (
    <tr>
        <td>{label}</td>
        <td>{leg.alpha}</td>
        <td>{leg.beta}</td>
        <td>{leg.gamma}</td>
    </tr>
)


const poseTable = ({ pose }) => {
    const props = formatPose(pose)
    const propsFireBase = formatPoseFireBase(pose)
    
    //Envio de datos FireBase
    const dbRef = ref(db, "/");
    set(dbRef, propsFireBase); // Enviar los datos a Firebase
    //

    return (
        <div className="table-container">
            <PoseTable {...props} />
        </div>
    )
}


export default poseTable
