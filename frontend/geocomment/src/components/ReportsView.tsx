import { useState } from "react";
import Comment from "./Thread/Comment";
import { report, Service as ApiService } from "../api";

function ReportsView() {
  const [getReport, setReport] = useState<report>();

  ApiService.getReports().then((reports) => {
    if (reports.length > 0) {
      setReport(reports[0]);
    }
  });

  return (
    <div>
      {getReport && (
        <div>
          <Comment
            comment={getReport.comment}
            selectCallback={(id) => {}}
            reportCallback={(id) => {}}
            voteButtons={false}
          ></Comment>
          <p>{getReport.reason}</p>
        </div>
      )}
    </div>
  );
}

export default ReportsView;
