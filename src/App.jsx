import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {

  // ESTADOS
  const [students, setStudents] = useState(studentsData);

  const [nombreCompletoEstudiantes, setNombreCompletoEstudiantes] = useState("");
  const [imagenEstudiante, setImagenEstudiante] = useState("");
  const [telefonoEstudiante, setTelefonoEstudiante] = useState("");
  const [emailEstudiante, setEmailEstudiante] = useState("");
  const [programaEstudiante, setProgramaEstudiante] = useState("");
  const [ageGraduacionEstudiante, setAgeGraduacionEstudiante ] = useState(2023);
  const [estudianteGraduado, setEstudianteGraduado] = useState(false);

  const introducirNombreEstudiante = (evento) => {
    //console.log("Dentro del Nombre Estudiante")
    setNombreCompletoEstudiantes(evento.target.value)
    console.log(evento.target.value);
  }
  const introducirImagenEstudiante = (evento) => {
    //console.log("Dentro de la Imagen Estudiante")
    setImagenEstudiante(evento.target.value)
    console.log(evento.target.value);
  }
  const introducirTelefonoEstudiante = (evento) => {
    //console.log("Dentro del Telefono Estudiante")
    setTelefonoEstudiante(evento.target.value)
    console.log(evento.target.value);
  }
  const introducirEmailEstudiante = (evento) => {
    //console.log("Dentro del Email Estudiante")
    setEmailEstudiante(evento.target.value)
    console.log(evento.target.value);
  }
  const introducirProgramaEstudiante = (evento) => {
    //console.log("Dentro del Programa Estudiante")
    setProgramaEstudiante(evento.target.value)
    console.log(evento.target.value);
  }
  const introducirAnyoGraduacionEstudiante = (evento) => {
    //console.log("Dentro del Año Graduación Estudiante")
    setAgeGraduacionEstudiante(evento.target.value)
    console.log(evento.target.value);
  }
  const introducirEstudianteGraduado = (evento) => {
    //console.log("Dentro del Checked si está Graduado o no")
    setEstudianteGraduado(evento.target.checked)
    console.log(evento.target.checked);
  }



  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={introducirNombreEstudiante} name="fullName" value={nombreCompletoEstudiantes} type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={introducirImagenEstudiante} name="image" value={imagenEstudiante} type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={introducirTelefonoEstudiante} name="phone" value={telefonoEstudiante} type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={introducirEmailEstudiante} name="email" value={emailEstudiante} type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={introducirProgramaEstudiante} value={programaEstudiante}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={introducirAnyoGraduacionEstudiante}
              value={ageGraduacionEstudiante}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input onChange={introducirEstudianteGraduado} name="graduated" checked={estudianteGraduado} type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
