import React, { useState, useEffect } from "react";
import TabList from "../../molecules/tabList/TabList";
import { programateStore } from "../../../store/programateStore";
import ListDrive from "../../molecules/ListDrive/ListDrive";
import PropTypes from "prop-types";
/**
 * Componente que muestra los recursos y permite elegir que recursos mostrar o Descargar
 * ## nota
 * No se muestra nigun archivo por defecto porque la carga por defecto se hace en un componete superior a este
 */
function PanelSchool({ programa }) {
  const { SelectedResource, setLanguage, filterItems } = programateStore();
  console.log(programa);
  useEffect(() => {
    setLanguage("HTML");
  }, []);
  return (
    <div className="panel-sources">
      <div className="player-container">
        <iframe
          className="iframe-container"
          src={`https://drive.google.com/file/d/${SelectedResource}/preview`}
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="tabSources">
        <TabList programa={programa} />
        <ListDrive sources={filterItems} nameSource={"videos"} />
        <ListDrive sources={filterItems} nameSource={"workbooks"} />
      </div>
    </div>
  );
}
PanelSchool.propTypes = {
/**
* Se pasa al Tablist para que este cambie la lista mostrada
*/
  programa: PropTypes.oneOf(["school", "academy"]).isRequired,
};

export default PanelSchool;
