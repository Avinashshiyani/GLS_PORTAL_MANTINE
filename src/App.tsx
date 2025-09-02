import "@mantine/core/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoxPage from "./Box/Box";
import Feedback from "./Pages/Feedback/Feedback";
import Layout from "./Layout";
import CreateScheduleForm from "./Pages/CreateSchedule/CreateSchedule";
import GenerateReport from "./Pages/GenerateReport/GenerateReport";
import ViewFeedBack from "./Pages/ViewFeedBack/ViewFeedBack";
import FeedbackReview from "./Pages/FeedbackReview/FeedbackReview";
import { NotFoundImage } from "./Pages/PageNotFound/NotFoundImage";
export default function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BoxPage />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="*" element={<NotFoundImage />} />
          <Route
            path="feedback/createschedule"
            element={<CreateScheduleForm />}
          />
          <Route path="feedback/generatereport" element={<GenerateReport />} />
          <Route path="feedback/viewfeedback" element={<ViewFeedBack />} />
          <Route
            path="feedback/viewfeedback/feedbackreview"
            element={<FeedbackReview />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
