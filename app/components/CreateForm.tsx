"use client";
import Link from "next/link";
import styles from "../create/page.module.css";
import { useEffect, useState } from "react";

export default function CreateForm() {
  // LANGUAGES
  const [Languages, setLanguages] = useState<string[]>([]);
  const [addLanguage, setAddLanguage] = useState<string>("");
  const [removeLanguage, setRemoveLanguage] = useState<string | null>(null);

  const handleRemoveLanguage = (languageToRemove: string) => {
    setRemoveLanguage(languageToRemove);
  };

  useEffect(() => {
    const updateLanguages = () => {
      if (addLanguage && !Languages.includes(addLanguage)) {
        setLanguages((prevLanguages) => [...prevLanguages, addLanguage]);
      } else if (removeLanguage) {
        setLanguages((prevLanguages) =>
          prevLanguages.filter((language) => language !== removeLanguage)
        );
        setRemoveLanguage(null);
      }
    };

    updateLanguages();
  }, [addLanguage, removeLanguage, Languages]);

  useEffect(() => {
    console.log(Languages);
  }, [Languages]);

  // DATABASES
  const [Databases, setDatabases] = useState<string[]>([]);
  const [addDatabase, setAddDatabase] = useState<string>("");
  const [removeDatabase, setRemoveDatabase] = useState<string | null>(null);

  const handleRemoveDatabase = (databaseToRemove: string) => {
    setRemoveDatabase(databaseToRemove);
  };

  useEffect(() => {
    const updateDatabases = () => {
      if (addDatabase && !Databases.includes(addDatabase)) {
        setDatabases((prevDatabases) => [...prevDatabases, addDatabase]);
      } else if (removeDatabase) {
        setDatabases((prevDatabases) =>
          prevDatabases.filter((database) => database !== removeDatabase)
        );
        setRemoveDatabase(null);
      }
    };

    updateDatabases();
  }, [addDatabase, removeDatabase, Databases]);

  useEffect(() => {
    console.log(Databases);
  }, [Databases]);

  // API
  const [APIs, setAPIs] = useState<string[]>([]);
  const [addAPI, setAddAPI] = useState<string>("");
  const [removeAPI, setRemoveAPI] = useState<string | null>(null);

  const handleRemoveAPI = (APIToRemove: string) => {
    setRemoveAPI(APIToRemove);
  };

  useEffect(() => {
    const updateAPIs = () => {
      if (addAPI && !APIs.includes(addAPI)) {
        setAPIs((prevAPIs) => [...prevAPIs, addAPI]);
      } else if (removeAPI) {
        setAPIs((prevAPIs) => prevAPIs.filter((API) => API !== removeAPI));
        setRemoveAPI(null);
      }
    };

    updateAPIs();
  }, [addAPI, removeAPI, APIs]);

  useEffect(() => {
    console.log(APIs);
  }, [APIs]);

  // FRAMEWORKS
  const [Frameworks, setFrameworks] = useState<string[]>([]);
  const [addFramework, setAddFramework] = useState<string>("");
  const [removeFramework, setRemoveFramework] = useState<string | null>(null);

  const handleRemoveFramework = (frameworkToRemove: string) => {
    setRemoveFramework(frameworkToRemove);
  };

  useEffect(() => {
    const updateFrameworks = () => {
      if (addFramework && !Frameworks.includes(addFramework)) {
        setFrameworks((prevFrameworks) => [...prevFrameworks, addFramework]);
      } else if (removeFramework) {
        setFrameworks((prevFrameworks) =>
          prevFrameworks.filter((framework) => framework !== removeFramework)
        );
        setRemoveFramework(null);
      }
    };

    updateFrameworks();
  }, [addFramework, removeFramework, Frameworks]);

  useEffect(() => {
    console.log(Frameworks);
  }, [Frameworks]);

  // CLOUDS
  const [Clouds, setClouds] = useState<string[]>([]);
  const [addCloud, setAddCloud] = useState<string>("");
  const [removeCloud, setRemoveCloud] = useState<string | null>(null);

  const handleRemoveCloud = (cloudToRemove: string) => {
    setRemoveCloud(cloudToRemove);
  };

  useEffect(() => {
    const updateClouds = () => {
      if (addCloud && !Clouds.includes(addCloud)) {
        setClouds((prevClouds) => [...prevClouds, addCloud]);
      } else if (removeCloud) {
        setClouds((prevClouds) =>
          prevClouds.filter((cloud) => cloud !== removeCloud)
        );
        setRemoveCloud(null);
      }
    };

    updateClouds();
  }, [addCloud, removeCloud, Clouds]);

  useEffect(() => {
    console.log(Clouds);
  }, [Clouds]);

  return (
    <>
      <div className="content">
        <p>
          Select a <b>GitHub Repository.</b>
        </p>
        <p className={styles.required}>&emsp;[Required]</p>
        <hr />
        <select name="repo" id="" style={{ marginBottom: "3rem" }}>
          <option value="" selected disabled hidden>
            ---
          </option>
          <option value="">TestRepo1</option>
          <option value="">TestRepo2</option>
          <option value="">TestRepo3</option>
          <option value="">TestRepo4</option>
        </select>

        <p>
          Select all of the <b>Languages</b> used in the creation of your tech
          stack.
        </p>
        <p className={styles.required}>&emsp;[Required]</p>
        <hr />
        <select
          name="language"
          id=""
          onChange={(e) =>
            setAddLanguage((e.target as HTMLSelectElement).value)
          }
        >
          <option value="" selected disabled hidden>
            ---
          </option>
          <option value="C#">C#</option>
          <option value="Go">Go</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Rust">Rust</option>
          <option value="Swift">Swift</option>
        </select>
        <hr />

        <div className={styles.selectedHolder}>
          <p className={styles.selected}>[Selected]</p>
          <div className={styles.holder}>
            {Languages.map((language) => (
              <button
                key={language}
                className={styles.inputSelected}
                onClick={() => handleRemoveLanguage(language)}
              >
                {language}&ensp;<i className="fa-solid fa-xmark fa-2xs"></i>
              </button>
            ))}
          </div>
        </div>

        <p>
          Select all of the <b>Databases</b> used in the creation of your tech
          stack.
        </p>
        <hr />
        <select
          name="database"
          id=""
          onChange={(e) =>
            setAddDatabase((e.target as HTMLSelectElement).value)
          }
        >
          <option value="" selected disabled hidden>
            ---
          </option>
          <option value="Cassandra">Cassandra</option>
          <option value="Microsoft SQL Server">Microsoft SQL Server</option>
          <option value="MongoDB">MongoDB</option>
          <option value="MySQL">MySQL</option>
          <option value="Postgres">Postgres</option>
          <option value="Redis">Redis</option>
          <option value="sqLite">sqLite</option>
        </select>
        <hr />

        <div className={styles.selectedHolder}>
          <p className={styles.selected}>[Selected]</p>
          <div className={styles.holder}>
            {Databases.map((database) => (
              <button
                key={database}
                className={styles.inputSelected}
                onClick={() => handleRemoveDatabase(database)}
              >
                {database}&ensp;<i className="fa-solid fa-xmark fa-2xs"></i>
              </button>
            ))}
          </div>
        </div>

        <p>
          Select all of the <b>APIs</b> used in the creation of your tech stack.
        </p>
        <hr />
        <select
          name="api"
          id=""
          onChange={(e) => setAddAPI((e.target as HTMLSelectElement).value)}
        >
          <option value="" selected disabled hidden>
            ---
          </option>
          <option value="Notion">Notion</option>
          <option value="Reddit">Reddit</option>
          <option value="SendGrid">SendGrid</option>
          <option value="Slack">Slack</option>
          <option value="Spotify">Spotify</option>
          <option value="Stripe">Stripe</option>
          <option value="Twitch">Twitch</option>
        </select>
        <hr />

        <div className={styles.selectedHolder}>
          <p className={styles.selected}>[Selected]</p>
          <div className={styles.holder}>
            {APIs.map((API) => (
              <button
                key={API}
                className={styles.inputSelected}
                onClick={() => handleRemoveAPI(API)}
              >
                {API}&ensp;<i className="fa-solid fa-xmark fa-2xs"></i>
              </button>
            ))}
          </div>
        </div>

        <p>
          Select all of the <b>Frameworks</b> used in the creation of your tech
          stack.
        </p>
        <hr />
        <select
          name="framework"
          id=""
          onChange={(e) =>
            setAddFramework((e.target as HTMLSelectElement).value)
          }
        >
          <option value="" selected disabled hidden>
            ---
          </option>
          <option value="Angular">Angular</option>
          <option value="Django">Django</option>
          <option value="Express">Express</option>
          <option value="Larvel">Larvel</option>
          <option value="Nextjs">Next.js</option>
          <option value="Ruby on Rails">Ruby on Rails</option>
          <option value="Spring Boot">Spring Boot</option>
        </select>
        <hr />

        <div className={styles.selectedHolder}>
          <p className={styles.selected}>[Selected]</p>
          <div className={styles.holder}>
            {Frameworks.map((framework) => (
              <button
                key={framework}
                className={styles.inputSelected}
                onClick={() => handleRemoveFramework(framework)}
              >
                {framework}&ensp;<i className="fa-solid fa-xmark fa-2xs"></i>
              </button>
            ))}
          </div>
        </div>

        <p>
          Select all of the <b>Cloud Services</b> used in the creation of your
          tech stack.
        </p>
        <hr />
        <select
          name="cloud"
          id=""
          onChange={(e) => setAddCloud((e.target as HTMLSelectElement).value)}
        >
          <option value="" selected disabled hidden>
            ---
          </option>
          <option value="AWS">AWS</option>
          <option value="Azure">Azure</option>
          <option value="DigitalOcean">DigitalOcean</option>
          <option value="Google Cloud Platform">Google Cloud Platform</option>
          <option value="Heroku">Heroku</option>
          <option value="Oracle">Oracle</option>
          <option value="Vercel">Vercel</option>
        </select>
        <hr />

        <div className={styles.selectedHolder}>
          <p className={styles.selected}>[Selected]</p>
          <div className={styles.holder}>
            {Clouds.map((cloud) => (
              <button
                key={cloud}
                className={styles.inputSelected}
                onClick={() => handleRemoveCloud(cloud)}
              >
                {cloud}&ensp;<i className="fa-solid fa-xmark fa-2xs"></i>
              </button>
            ))}
          </div>
        </div>

        <p>
          Select up to <b>4 Images</b> that represent your tech stack.
        </p>
        <hr />
        <hr />
        <div className={styles.imageHolder}>
          <label className="file-label">
            <p>
              Image&ensp;<i className="fa-solid fa-plus fa-2xs"></i>
            </p>
            <input className={styles.inputFile} type="file" id="" />
          </label>
          <label className="file-label">
            <p>
              Image&ensp;<i className="fa-solid fa-plus fa-2xs"></i>
            </p>
            <input className={styles.inputFile} type="file" id="" />
          </label>
          <label className="file-label">
            <p>
              Image&ensp;<i className="fa-solid fa-plus fa-2xs"></i>
            </p>
            <input className={styles.inputFile} type="file" id="" />
          </label>
          <label className="file-label">
            <p>
              Image&ensp;<i className="fa-solid fa-plus fa-2xs"></i>
            </p>
            <input className={styles.inputFile} type="file" id="" />
          </label>
        </div>

        <div className={styles.buttonHolder}>
          <Link href="/stack" style={{ padding: 0 }}>
            <p>Create Stack&ensp;</p>
            <button className={styles.createButton}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
