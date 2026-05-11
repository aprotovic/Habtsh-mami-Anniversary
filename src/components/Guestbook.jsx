import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send } from "lucide-react";

const storageKey = "habtu-mami-guestbook-wishes";

const defaultWishes = [
  {
    id: "default-1",
    name: "Family & Friends",
    message:
      "May your home always be filled with peace, laughter, blessings, and love.",
    hearts: 13,
  },
  {
    id: "default-2",
    name: "With Love",
    message: "13 beautiful years down, forever to go. Happy anniversary!",
    hearts: 7,
  },
];

const Guestbook = () => {
  const [wishes, setWishes] = useState(defaultWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const savedWishes = window.localStorage.getItem(storageKey);
      if (savedWishes) {
        setWishes(JSON.parse(savedWishes));
      }
    } catch (error) {
      console.warn("Could not load saved guestbook wishes:", error);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(wishes));
    } catch (error) {
      console.warn("Could not save guestbook wishes:", error);
    }
  }, [wishes]);

  const submitWish = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) return;

    setWishes((currentWishes) => [
      {
        id: `${Date.now()}`,
        name: trimmedName,
        message: trimmedMessage,
        hearts: 1,
      },
      ...currentWishes,
    ]);
    setName("");
    setMessage("");
  };

  const addHeart = (id) => {
    setWishes((currentWishes) =>
      currentWishes.map((wish) =>
        wish.id === id ? { ...wish, hearts: wish.hearts + 1 } : wish,
      ),
    );
  };

  return (
    <section
      className="guestbook-section"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #fff 0%, var(--cream) 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <span
            style={{
              color: "var(--gold)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            Guestbook
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              marginTop: "10px",
              color: "#2c2c2c",
            }}
          >
            Leave a Blessing
          </h2>
          <p
            style={{ maxWidth: "650px", margin: "15px auto 0", color: "#777" }}
          >
            Friends and family can add a short anniversary wish and send extra
            hearts. Wishes are saved on this device.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 420px) 1fr",
            gap: "30px",
            alignItems: "start",
          }}
          className="guestbook-grid"
        >
          <motion.form
            onSubmit={submitWish}
            className="glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              padding: "30px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.82)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.06)",
            }}
          >
            <label
              style={{
                display: "block",
                color: "#555",
                marginBottom: "8px",
                fontWeight: 600,
              }}
            >
              Your Name
            </label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Type your name"
              maxLength={40}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(212,175,55,0.25)",
                marginBottom: "18px",
                font: "inherit",
                outlineColor: "var(--gold)",
              }}
            />

            <label
              style={{
                display: "block",
                color: "#555",
                marginBottom: "8px",
                fontWeight: 600,
              }}
            >
              Anniversary Wish
            </label>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write a beautiful message..."
              maxLength={220}
              rows={5}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(212,175,55,0.25)",
                marginBottom: "18px",
                font: "inherit",
                resize: "vertical",
                outlineColor: "var(--gold)",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "15px 18px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, var(--gold), var(--romantic-red))",
                color: "white",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow: "0 12px 28px rgba(196,30,58,0.18)",
              }}
            >
              Send Love <Send size={18} />
            </button>
          </motion.form>

          <div style={{ display: "grid", gap: "18px" }}>
            <AnimatePresence initial={false}>
              {wishes.map((wish) => (
                <motion.article
                  key={wish.id}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18 }}
                  className="glass"
                  style={{
                    padding: "24px",
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.78)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          color: "#2c2c2c",
                          marginBottom: "8px",
                        }}
                      >
                        {wish.name}
                      </h3>
                      <p style={{ color: "#666", lineHeight: 1.7 }}>
                        {wish.message}
                      </p>
                    </div>
                    <button
                      onClick={() => addHeart(wish.id)}
                      aria-label={`Send heart to ${wish.name}`}
                      style={{
                        minWidth: "70px",
                        border: "none",
                        borderRadius: "999px",
                        background: "rgba(196,30,58,0.08)",
                        color: "var(--romantic-red)",
                        padding: "10px 12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "7px",
                        cursor: "pointer",
                        fontWeight: 700,
                      }}
                    >
                      <Heart size={17} fill="currentColor" /> {wish.hearts}
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
