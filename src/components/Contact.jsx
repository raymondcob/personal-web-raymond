import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { styles } from "../style"
import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../Utils/motion"
import { StarsCanvas } from "./canvas"
import { Toaster, toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const email_service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const email_template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const email_public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })

  }
  const handleSubmit = (e) => {

    e.preventDefault()
    setLoading(true)

    emailjs.send(email_service_id, email_template_id, {

      from_name: form.name,
      to_name: "Raymond Cob",
      from_email: form.email,
      to_email: "raymondcob14@gmail.com",
      message: form.message,

    }, email_public_key)
      .then(() => {
        setLoading(false)
        toast.success('Message sent successfully!')
        setForm({ name: "", email: "", message: "" })
      }, (error) => {
        setLoading(false)
        console.log(error)
        toast.error('Something went wrong. Please try again.')
      })

  }

  return (
    <div className="relative xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#151030',
            color: '#fff',
            border: '1px solid #915eff30'
          },
        }}
      />
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl">
        <p className={styles.heroSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium focus:outline-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium focus:outline-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium focus:outline-white"
            />
          </label>

          <button
            type="submit"
            className="bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
      <StarsCanvas />
    </div>
  )
}

export default SectionWrapper(Contact, "Contact")
