import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const anniversaryStart = new Date("2013-05-11T00:00:00");

const getLoveTime = () => {
  const now = new Date();
  const diffMs = Math.max(0, now - anniversaryStart);
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalDays = Math.floor(totalSeconds / 86400);

  return {
    years: Math.floor(totalDays / 365.25),
    months: Math.floor(totalDays / 30.44),
    days: totalDays,
    seconds: totalSeconds,
  };
};

const CounterItem = ({ value, label, accent = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="counter-item glass"
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        textAlign: "center",
        padding: accent ? "30px 28px" : "30px 20px",
        borderRadius: "24px",
        gridColumn: accent ? "1 / -1" : undefined,
        justifySelf: accent ? "center" : undefined,
        width: "100%",
        maxWidth: accent ? "560px" : undefined,
        minWidth: 0,
        background: accent
          ? "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(196,30,58,0.08))"
          : "rgba(255, 255, 255, 0.75)",
        boxShadow: "0 18px 45px rgba(0,0,0,0.06)",
      }}
    >
      <motion.div
        key={`${label}-${value}`}
        initial={{ opacity: 0.35, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: label === "Seconds" ? 0.25 : 0.45 }}
        style={{
          fontSize: accent
            ? "clamp(2.2rem, 8vw, 3.8rem)"
            : "clamp(2.3rem, 7vw, 4rem)",
          fontWeight: 700,
          color: accent ? "var(--romantic-red)" : "var(--gold)",
          fontFamily: "'Playfair Display', serif",
          marginBottom: "10px",
          lineHeight: 1,
          letterSpacing: accent ? "-0.04em" : undefined,
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {value.toLocaleString()}
      </motion.div>
      <div
        style={{
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "0.85rem",
          color: "#666",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
};

const Counter = () => {
  const [loveTime, setLoveTime] = useState(() => getLoveTime());

  useEffect(() => {
    const timer = setInterval(() => setLoveTime(getLoveTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = useMemo(
    () => [
      { value: loveTime.years, label: "Years" },
      { value: loveTime.months, label: "Months" },
      { value: loveTime.days, label: "Days" },
      { value: loveTime.seconds, label: "Seconds", accent: true },
    ],
    [loveTime],
  );

  return (
    <section
      className="counter-section"
      style={{ padding: "100px 0", background: "white" }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "20px",
            color: "#2c2c2c",
          }}
        >
          Our Love Story in Numbers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "680px",
            margin: "0 auto 60px",
            textAlign: "center",
            color: "#777",
            fontSize: "1rem",
          }}
        >
          Every second is another beautiful proof of a promise that keeps
          growing stronger.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat) => (
            <CounterItem key={stat.label} {...stat} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="ethiopic"
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontStyle: "italic",
            color: "#999",
          }}
        >
          ... እና አሁንም በየሰከንዱ የሚቀጥል ፍቅር።
        </motion.p>
      </div>
    </section>
  );
};

export default Counter;
