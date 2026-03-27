
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import ClassDetail from './pages/ClassDetail';
import ComingSoon from './pages/ComingSoon';

// Class 1-8 Routes
import Class1Page from '../pages/Classes/Class 1/index';
import Class2Page from '../pages/Classes/Class 2/index';
import Class3Page from '../pages/Classes/Class 3/index';
import Class4Page from '../pages/Classes/Class 4/index';
import Class5Page from '../pages/Classes/Class 5/index';
import Class6Page from '../pages/Classes/Class 6/index';
import Class7Page from '../pages/Classes/Class 7/index';
import Class8Page from '../pages/Classes/Class 8/index';
import Class11Page from '../pages/Classes/Class 11/index';
import Class12Page from '../pages/Classes/Class 12/index';


// Commerce Stream -> 11
import Class11Commerce from '../pages/Classes/Class 11/Commerce/index';
// Humanities Stream -> 11
import Class11Humanities from '../pages/Classes/Class 11/Humanities/index';
// Medical Stream -> 11
import Class11Medical from '../pages/Classes/Class 11/Medical/index';
// Non-Medical Stream -> 11
import Class11NonMedical from '../pages/Classes/Class 11/Non-Medical/index';
// Non-Medical Stream -> 12
import Class12NonMedical from '../pages/Classes/Class 12/Non-Medical/index';
// Medical Stream -> 12
import Class12Medical from '../pages/Classes/Class 12/Medical/index';
// Humanities Stream -> 12
import Class12Humanities from '../pages/Classes/Class 12/Humanities/index';
// Commerce Stream -> 12
import Class12Commerce from '../pages/Classes/Class 12/Commerce/index';

// Class 9 Routes
import Class9Page from '../pages/Classes/Class 9/index';
import Class9Maths from '../pages/Classes/Class 9/Mathematics/index';
import Class9Science from '../pages/Classes/Class 9/Science/index';
import Class9SocialScience from '../pages/Classes/Class 9/Social Science/index';
import Class9Hindi from '../pages/Classes/Class 9/Hindi/index';
import Class9ComputerApps from '../pages/Classes/Class 9/ComputerApplications/index';
import Class9English from '../pages/Classes/Class 9/English/index';

// Class 10 Routes
import Class10Page from '../pages/Classes/Class 10/index';
import Class10Maths from '../pages/Classes/Class 10/Mathematics/index';
import Class10Science from '../pages/Classes/Class 10/Science/index';
import Class10SocialScience from '../pages/Classes/Class 10/Social Science/index';
import Class10Hindi from '../pages/Classes/Class 10/Hindi/index';
import Class10ComputerApps from '../pages/Classes/Class 10/Computer Applications/index';
import Class10English from '../pages/Classes/Class 10/English/index';

import HindiChapter1 from '../pages/Classes/Class 10/Hindi/Chapter-1/index';
import HindiChapter2 from '../pages/Classes/Class 10/Hindi/Chapter-2/index';
import HindiChapter3 from '../pages/Classes/Class 10/Hindi/Chapter-3/index';
import HindiChapter4 from '../pages/Classes/Class 10/Hindi/Chapter-4/index';
import HindiChapter5 from '../pages/Classes/Class 10/Hindi/Chapter-5/index';
import HindiChapter6 from '../pages/Classes/Class 10/Hindi/Chapter-6/index';
import HindiChapter7 from '../pages/Classes/Class 10/Hindi/Chapter-7/index';
import HindiChapter8 from '../pages/Classes/Class 10/Hindi/Chapter-8/index';
import HindiChapter9 from '../pages/Classes/Class 10/Hindi/Chapter-9/index';
import HindiChapter10 from '../pages/Classes/Class 10/Hindi/Chapter-10/index';
import HindiChapter11 from '../pages/Classes/Class 10/Hindi/Chapter-11/index';
import HindiChapter12 from '../pages/Classes/Class 10/Hindi/Chapter-12/index';
import HindiChapter13 from '../pages/Classes/Class 10/Hindi/Chapter-13/index';
import HindiChapter14 from '../pages/Classes/Class 10/Hindi/Chapter-14/index';
import HindiChapter15 from '../pages/Classes/Class 10/Hindi/Chapter-15/index';
import HindiChapter16 from '../pages/Classes/Class 10/Hindi/Chapter-16/index';

// Mathematics Chapters
import MathsChapter1 from '../pages/Classes/Class 10/Mathematics/Chapter1/index';
import MathsChapter2 from '../pages/Classes/Class 10/Mathematics/Chapter2/index';
import MathsChapter3 from '../pages/Classes/Class 10/Mathematics/Chapter3/index';
import MathsChapter4 from '../pages/Classes/Class 10/Mathematics/Chapter4/index';
import MathsChapter5 from '../pages/Classes/Class 10/Mathematics/Chapter5/index';
import MathsChapter6 from '../pages/Classes/Class 10/Mathematics/Chapter6/index';
import MathsChapter7 from '../pages/Classes/Class 10/Mathematics/Chapter7/index';
import MathsChapter8 from '../pages/Classes/Class 10/Mathematics/Chapter8/index';
import MathsChapter9 from '../pages/Classes/Class 10/Mathematics/Chapter9/index';
import MathsChapter10 from '../pages/Classes/Class 10/Mathematics/Chapter10/index';
import MathsChapter11 from '../pages/Classes/Class 10/Mathematics/Chapter11/index';
import MathsChapter12 from '../pages/Classes/Class 10/Mathematics/Chapter12/index';
import MathsChapter13 from '../pages/Classes/Class 10/Mathematics/Chapter13/index';
import MathsChapter14 from '../pages/Classes/Class 10/Mathematics/Chapter14/index';
import MathsChapter15 from '../pages/Classes/Class 10/Mathematics/Chapter15/index';

// Science Chapters
import ScienceChapter1 from '../pages/Classes/Class 10/Science/Chapter1/index';
import ScienceChapter2 from '../pages/Classes/Class 10/Science/chapter2/index';
import ScienceChapter3 from '../pages/Classes/Class 10/Science/chapter3/index';
import ScienceChapter4 from '../pages/Classes/Class 10/Science/chapter4/index';
import ScienceChapter5 from '../pages/Classes/Class 10/Science/chapter5/index';
import ScienceChapter6 from '../pages/Classes/Class 10/Science/chapter6/index';
import ScienceChapter7 from '../pages/Classes/Class 10/Science/chapter7/index';
import ScienceChapter8 from '../pages/Classes/Class 10/Science/chapter8/index';
import ScienceChapter9 from '../pages/Classes/Class 10/Science/chapter9/index';
import ScienceChapter10 from '../pages/Classes/Class 10/Science/chapter10/index';
import ScienceChapter11 from '../pages/Classes/Class 10/Science/chapter11/index';
import ScienceChapter12 from '../pages/Classes/Class 10/Science/chapter12/index';
import ScienceChapter13 from '../pages/Classes/Class 10/Science/chapter13/index';

// Computer Applications Chapters
import HtmlCssChapter from '../pages/Classes/Class 10/Computer Applications/chapters/html_css/index';
import JavaBasicsChapter from '../pages/Classes/Class 10/Computer Applications/chapters/java_basics/index';
import NetworkingChapter from '../pages/Classes/Class 10/Computer Applications/chapters/networking/index';

// English Chapters
import EnglishChapter1 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter1/index';
import EnglishChapter2 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter2/index';
import EnglishChapter3 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter3/index';
import EnglishChapter4 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter4/index';
import EnglishChapter5 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter5/index';
import EnglishChapter6 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter6/index';
import EnglishChapter7 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter7/index';
import EnglishChapter8 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter8/index';
import EnglishChapter9 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter9/index';
import EnglishChapter10 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter10/index';
import EnglishChapter11 from '../pages/Classes/Class 10/English/Chapters1to11/Chapter11/index';
import EnglishChapter12 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter12/index';
import EnglishChapter13 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter13/index';
import EnglishChapter14 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter14/index';
import EnglishChapter15 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter15/index';
import EnglishChapter16 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter16/index';
import EnglishChapter17 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter17/index';
import EnglishChapter18 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter18/index';
import EnglishChapter19 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter19/index';
import EnglishChapter20 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter20/index';
import EnglishChapter21 from '../pages/Classes/Class 10/English/Chapters12to21/Chapter21/index';

// English Grammar
import EnglishGrammar from '../pages/Classes/Class 10/English/grammar/index';
import GrammarTopic1 from '../pages/Classes/Class 10/English/grammar/Topic1/index';
import GrammarTopic2 from '../pages/Classes/Class 10/English/grammar/Topic2/index';
import GrammarTopic3 from '../pages/Classes/Class 10/English/grammar/Topic3/index';
import GrammarTopic4 from '../pages/Classes/Class 10/English/grammar/Topic4/index';
import GrammarTopic5 from '../pages/Classes/Class 10/English/grammar/Topic5/index';
import GrammarTopic6 from '../pages/Classes/Class 10/English/grammar/Topic6/index';
import GrammarTopic7 from '../pages/Classes/Class 10/English/grammar/Topic7/index';
import GrammarTopic8 from '../pages/Classes/Class 10/English/grammar/Topic8/index';
import GrammarTopic9 from '../pages/Classes/Class 10/English/grammar/Topic9/index';
import GrammarTopic10 from '../pages/Classes/Class 10/English/grammar/Topic10/index';
import GrammarTopic11 from '../pages/Classes/Class 10/English/grammar/Topic11/index';
import GrammarTopic12 from '../pages/Classes/Class 10/English/grammar/Topic12/index';
import GrammarTopic13 from '../pages/Classes/Class 10/English/grammar/Topic13/index';
import GrammarTopic14 from '../pages/Classes/Class 10/English/grammar/Topic14/index';
import GrammarTopic15 from '../pages/Classes/Class 10/English/grammar/Topic15/index';


// Social Science Chapters

// History
import HistoryChapter1 from '../pages/Classes/Class 10/Social Science/history/Chapter1/index';
import HistoryChapter2 from '../pages/Classes/Class 10/Social Science/history/Chapter2/index';
import HistoryChapter3 from '../pages/Classes/Class 10/Social Science/history/Chapter3/index';
import HistoryChapter4 from '../pages/Classes/Class 10/Social Science/history/Chapter4/index';
import HistoryChapter5 from '../pages/Classes/Class 10/Social Science/history/Chapter5/index';

// Geography
import GeographyChapter1 from '../pages/Classes/Class 10/Social Science/geography/Chapter1/index';
import GeographyChapter2 from '../pages/Classes/Class 10/Social Science/geography/Chapter2/index';
import GeographyChapter3 from '../pages/Classes/Class 10/Social Science/geography/Chapter3/index';
import GeographyChapter4 from '../pages/Classes/Class 10/Social Science/geography/Chapter4/index';
import GeographyChapter5 from '../pages/Classes/Class 10/Social Science/geography/Chapter5/index';
import GeographyChapter6 from '../pages/Classes/Class 10/Social Science/geography/Chapter6/index';
import GeographyChapter7 from '../pages/Classes/Class 10/Social Science/geography/Chapter7/index';

// Political Science
import PolSciChapter1 from '../pages/Classes/Class 10/Social Science/politicalScience/Chapter1/index';
import PolSciChapter2 from '../pages/Classes/Class 10/Social Science/politicalScience/Chapter2/index';
import PolSciChapter3 from '../pages/Classes/Class 10/Social Science/politicalScience/Chapter3/index';
import PolSciChapter4 from '../pages/Classes/Class 10/Social Science/politicalScience/Chapter4/index';
import PolSciChapter5 from '../pages/Classes/Class 10/Social Science/politicalScience/Chapter5/index';
import PolSciChapter6 from '../pages/Classes/Class 10/Social Science/politicalScience/Chapter6/index';

// Economics
import EcoChapter1 from '../pages/Classes/Class 10/Social Science/economics/Chapter1/index';
import EcoChapter2 from '../pages/Classes/Class 10/Social Science/economics/Chapter2/index';
import EcoChapter3 from '../pages/Classes/Class 10/Social Science/economics/Chapter3/index';
import EcoChapter4 from '../pages/Classes/Class 10/Social Science/economics/Chapter4/index';
import EcoChapter5 from '../pages/Classes/Class 10/Social Science/economics/Chapter5/index';

import SamplePapers from '../pages/SamplePapers/SamplePapers';

// Admin Routes

import AdminLogin from '../admin/pages/Login';
import AdminDashboard from '../admin/pages/Dashboard';
import UserManagement from '../admin/pages/UserManagement';
import ContentManagement from '../admin/pages/ContentManagement';
import Subscriptions from '../admin/pages/Subscriptions';
import Analytics from '../admin/pages/Analytics';
import Settings from '../admin/pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

        {/* Class 1-8 Routes */}
        <Route path="/class/Class 1" element={<Class1Page />} />
        <Route path="/class/Class 2" element={<Class2Page />} />
        <Route path="/class/Class 3" element={<Class3Page />} />
        <Route path="/class/Class 4" element={<Class4Page />} />
        <Route path="/class/Class 5" element={<Class5Page />} />
        <Route path="/class/Class 6" element={<Class6Page />} />
        <Route path="/class/Class 7" element={<Class7Page />} />
        <Route path="/class/Class 8" element={<Class8Page />} />

        {/* Class 9 Routes */}
        <Route path="/class/Class 9" element={<Class9Page />} />
        <Route path="/class/Class 9/Mathematics" element={<Class9Maths />} />
        <Route path="/class/Class 9/Science" element={<Class9Science />} />
        <Route path="/class/Class 9/Social Science" element={<Class9SocialScience />} />
        <Route path="/class/Class 9/Hindi" element={<Class9Hindi />} />
        <Route path="/class/Class 9/Computer Applications" element={<Class9ComputerApps />} />
        <Route path="/class/Class 9/English" element={<Class9English />} />

        {/* Class 10 Routes */}
        <Route path="/class/Class 10" element={<Class10Page />} />
        <Route path="/class/Class 10/Mathematics" element={<Class10Maths />} />
        <Route path="/class/Class 10/Science" element={<Class10Science />} />
        <Route path="/class/Class 10/Social Science" element={<Class10SocialScience />} />
        <Route path="/class/Class 10/Hindi" element={<Class10Hindi />} />
        <Route path="/class/Class 10/Computer Applications" element={<Class10ComputerApps />} />
        <Route path="/class/Class 10/English" element={<Class10English />} />

        {/* Class 11 & 12 Routes */}
        <Route path="/class/Class 11" element={<Class11Page />} />
        <Route path="/class/Class 11/Commerce" element={<Class11Commerce />} />
        <Route path="/class/Class 11/Humanities" element={<Class11Humanities />} />
        <Route path="/class/Class 11/Medical" element={<Class11Medical />} />
        <Route path="/class/Class 11/Non-Medical" element={<Class11NonMedical />} />
        <Route path="/class/Class 12" element={<Class12Page />} />
        <Route path="/class/Class 12/Non-Medical" element={<Class12NonMedical />} />
        <Route path="/class/Class 12/Medical" element={<Class12Medical />} />
        <Route path="/class/Class 12/Humanities" element={<Class12Humanities />} />
        <Route path="/class/Class 12/Commerce" element={<Class12Commerce />} />

        {/* Computer Applications Chapters */}
        <Route path="/class/Class 10/Computer Applications/Chapter-html-css" element={<HtmlCssChapter />} />
        <Route path="/class/Class 10/Computer Applications/Chapter-java-basics" element={<JavaBasicsChapter />} />
        <Route path="/class/Class 10/Computer Applications/Chapter-networking" element={<NetworkingChapter />} />

        {/* English Chapters */}
        <Route path="/class/Class 10/English/Chapter-1" element={<EnglishChapter1 />} />
        <Route path="/class/Class 10/English/Chapter-2" element={<EnglishChapter2 />} />
        <Route path="/class/Class 10/English/Chapter-3" element={<EnglishChapter3 />} />
        <Route path="/class/Class 10/English/Chapter-4" element={<EnglishChapter4 />} />
        <Route path="/class/Class 10/English/Chapter-5" element={<EnglishChapter5 />} />
        <Route path="/class/Class 10/English/Chapter-6" element={<EnglishChapter6 />} />
        <Route path="/class/Class 10/English/Chapter-7" element={<EnglishChapter7 />} />
        <Route path="/class/Class 10/English/Chapter-8" element={<EnglishChapter8 />} />
        <Route path="/class/Class 10/English/Chapter-9" element={<EnglishChapter9 />} />
        <Route path="/class/Class 10/English/Chapter-10" element={<EnglishChapter10 />} />
        <Route path="/class/Class 10/English/Chapter-11" element={<EnglishChapter11 />} />
        <Route path="/class/Class 10/English/Chapter-12" element={<EnglishChapter12 />} />
        <Route path="/class/Class 10/English/Chapter-13" element={<EnglishChapter13 />} />
        <Route path="/class/Class 10/English/Chapter-14" element={<EnglishChapter14 />} />
        <Route path="/class/Class 10/English/Chapter-15" element={<EnglishChapter15 />} />
        <Route path="/class/Class 10/English/Chapter-16" element={<EnglishChapter16 />} />
        <Route path="/class/Class 10/English/Chapter-17" element={<EnglishChapter17 />} />
        <Route path="/class/Class 10/English/Chapter-18" element={<EnglishChapter18 />} />
        <Route path="/class/Class 10/English/Chapter-19" element={<EnglishChapter19 />} />
        <Route path="/class/Class 10/English/Chapter-20" element={<EnglishChapter20 />} />
        <Route path="/class/Class 10/English/Chapter-21" element={<EnglishChapter21 />} />

        {/* English Grammar */}
        <Route path="/class/Class 10/English/Grammar" element={<EnglishGrammar />} />
        <Route path="/class/Class 10/English/Grammar/Topic-1" element={<GrammarTopic1 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-2" element={<GrammarTopic2 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-3" element={<GrammarTopic3 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-4" element={<GrammarTopic4 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-5" element={<GrammarTopic5 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-6" element={<GrammarTopic6 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-7" element={<GrammarTopic7 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-8" element={<GrammarTopic8 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-9" element={<GrammarTopic9 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-10" element={<GrammarTopic10 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-11" element={<GrammarTopic11 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-12" element={<GrammarTopic12 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-13" element={<GrammarTopic13 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-14" element={<GrammarTopic14 />} />
        <Route path="/class/Class 10/English/Grammar/Topic-15" element={<GrammarTopic15 />} />

        {/* Hindi Chapters */}
        <Route path="/class/Class 10/Hindi/Chapter-1" element={<HindiChapter1 />} />
        <Route path="/class/Class 10/Hindi/Chapter-2" element={<HindiChapter2 />} />
        <Route path="/class/Class 10/Hindi/Chapter-3" element={<HindiChapter3 />} />
        <Route path="/class/Class 10/Hindi/Chapter-4" element={<HindiChapter4 />} />
        <Route path="/class/Class 10/Hindi/Chapter-5" element={<HindiChapter5 />} />
        <Route path="/class/Class 10/Hindi/Chapter-6" element={<HindiChapter6 />} />
        <Route path="/class/Class 10/Hindi/Chapter-7" element={<HindiChapter7 />} />
        <Route path="/class/Class 10/Hindi/Chapter-8" element={<HindiChapter8 />} />
        <Route path="/class/Class 10/Hindi/Chapter-9" element={<HindiChapter9 />} />
        <Route path="/class/Class 10/Hindi/Chapter-10" element={<HindiChapter10 />} />
        <Route path="/class/Class 10/Hindi/Chapter-11" element={<HindiChapter11 />} />
        <Route path="/class/Class 10/Hindi/Chapter-12" element={<HindiChapter12 />} />
        <Route path="/class/Class 10/Hindi/Chapter-13" element={<HindiChapter13 />} />
        <Route path="/class/Class 10/Hindi/Chapter-14" element={<HindiChapter14 />} />
        <Route path="/class/Class 10/Hindi/Chapter-15" element={<HindiChapter15 />} />
        <Route path="/class/Class 10/Hindi/Chapter-16" element={<HindiChapter16 />} />

        {/* Mathematics Chapters */}
        <Route path="/class/Class 10/Mathematics/Chapter1" element={<MathsChapter1 />} />
        <Route path="/class/Class 10/Mathematics/Chapter2" element={<MathsChapter2 />} />
        <Route path="/class/Class 10/Mathematics/Chapter3" element={<MathsChapter3 />} />
        <Route path="/class/Class 10/Mathematics/Chapter4" element={<MathsChapter4 />} />
        <Route path="/class/Class 10/Mathematics/Chapter5" element={<MathsChapter5 />} />
        <Route path="/class/Class 10/Mathematics/Chapter6" element={<MathsChapter6 />} />
        <Route path="/class/Class 10/Mathematics/Chapter7" element={<MathsChapter7 />} />
        <Route path="/class/Class 10/Mathematics/Chapter8" element={<MathsChapter8 />} />
        <Route path="/class/Class 10/Mathematics/Chapter9" element={<MathsChapter9 />} />
        <Route path="/class/Class 10/Mathematics/Chapter10" element={<MathsChapter10 />} />
        <Route path="/class/Class 10/Mathematics/Chapter11" element={<MathsChapter11 />} />
        <Route path="/class/Class 10/Mathematics/Chapter12" element={<MathsChapter12 />} />
        <Route path="/class/Class 10/Mathematics/Chapter13" element={<MathsChapter13 />} />
        <Route path="/class/Class 10/Mathematics/Chapter14" element={<MathsChapter14 />} />
        <Route path="/class/Class 10/Mathematics/Chapter15" element={<MathsChapter15 />} />

        {/* Science Chapters */}
        <Route path="/class/Class 10/Science/Chapter1" element={<ScienceChapter1 />} />
        <Route path="/class/Class 10/Science/Chapter2" element={<ScienceChapter2 />} />
        <Route path="/class/Class 10/Science/Chapter3" element={<ScienceChapter3 />} />
        <Route path="/class/Class 10/Science/Chapter4" element={<ScienceChapter4 />} />
        <Route path="/class/Class 10/Science/Chapter5" element={<ScienceChapter5 />} />
        <Route path="/class/Class 10/Science/Chapter6" element={<ScienceChapter6 />} />
        <Route path="/class/Class 10/Science/Chapter7" element={<ScienceChapter7 />} />
        <Route path="/class/Class 10/Science/Chapter8" element={<ScienceChapter8 />} />
        <Route path="/class/Class 10/Science/Chapter9" element={<ScienceChapter9 />} />
        <Route path="/class/Class 10/Science/Chapter10" element={<ScienceChapter10 />} />
        <Route path="/class/Class 10/Science/Chapter11" element={<ScienceChapter11 />} />
        <Route path="/class/Class 10/Science/Chapter12" element={<ScienceChapter12 />} />

        <Route path="/class/Class 10/Science/Chapter13" element={<ScienceChapter13 />} />

        {/* Social Science Chapters */}
        {/* History */}
        <Route path="/class/Class 10/Social Science/history/Chapter1" element={<HistoryChapter1 />} />
        <Route path="/class/Class 10/Social Science/history/Chapter2" element={<HistoryChapter2 />} />
        <Route path="/class/Class 10/Social Science/history/Chapter3" element={<HistoryChapter3 />} />
        <Route path="/class/Class 10/Social Science/history/Chapter4" element={<HistoryChapter4 />} />
        <Route path="/class/Class 10/Social Science/history/Chapter5" element={<HistoryChapter5 />} />

        {/* Geography */}
        <Route path="/class/Class 10/Social Science/geography/Chapter1" element={<GeographyChapter1 />} />
        <Route path="/class/Class 10/Social Science/geography/Chapter2" element={<GeographyChapter2 />} />
        <Route path="/class/Class 10/Social Science/geography/Chapter3" element={<GeographyChapter3 />} />
        <Route path="/class/Class 10/Social Science/geography/Chapter4" element={<GeographyChapter4 />} />
        <Route path="/class/Class 10/Social Science/geography/Chapter5" element={<GeographyChapter5 />} />
        <Route path="/class/Class 10/Social Science/geography/Chapter6" element={<GeographyChapter6 />} />
        <Route path="/class/Class 10/Social Science/geography/Chapter7" element={<GeographyChapter7 />} />

        {/* Political Science */}
        <Route path="/class/Class 10/Social Science/politicalScience/Chapter1" element={<PolSciChapter1 />} />
        <Route path="/class/Class 10/Social Science/politicalScience/Chapter2" element={<PolSciChapter2 />} />
        <Route path="/class/Class 10/Social Science/politicalScience/Chapter3" element={<PolSciChapter3 />} />
        <Route path="/class/Class 10/Social Science/politicalScience/Chapter4" element={<PolSciChapter4 />} />
        <Route path="/class/Class 10/Social Science/politicalScience/Chapter5" element={<PolSciChapter5 />} />
        <Route path="/class/Class 10/Social Science/politicalScience/Chapter6" element={<PolSciChapter6 />} />

        {/* Economics */}
        <Route path="/class/Class 10/Social Science/economics/Chapter1" element={<EcoChapter1 />} />
        <Route path="/class/Class 10/Social Science/economics/Chapter2" element={<EcoChapter2 />} />
        <Route path="/class/Class 10/Social Science/economics/Chapter3" element={<EcoChapter3 />} />
        <Route path="/class/Class 10/Social Science/economics/Chapter4" element={<EcoChapter4 />} />
        <Route path="/class/Class 10/Social Science/economics/Chapter5" element={<EcoChapter5 />} />

        {/* Sample Papers */}
        <Route path="/sample-papers" element={<SamplePapers />} />

        <Route path="/class/:classId" element={<ClassDetail />} />


        {/* Premium Routes */}
        <Route path="/premium" element={<ComingSoon />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/subscriptions" element={<Subscriptions />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

