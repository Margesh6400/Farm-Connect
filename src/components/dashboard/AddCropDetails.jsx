import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crop,
  Camera,
  Files,
  Plus,
  Edit2,
  Save,
  X,
  Eye,
  EyeOff,
  History,
  ChevronRight,
  BarChart2,
  Calendar,
} from "lucide-react";

export default function AddCropDetails() {
  const [mode, setMode] = useState("view");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  // Previous crops history
  const [cropHistory] = useState([
    {
      id: "prev1",
      cropName: "Wheat",
      variety: "HD-2967",
      quantity: "500",
      actualPrice: "2200",
      expectedPrice: "2000",
      harvestDate: "2023-12-15",
      soldDate: "2023-12-20",
      profit: "+10%",
      notes: "Quality exceeded expectations",
      performance: "Above Expected",
    },
    {
      id: "prev2",
      cropName: "Rice",
      variety: "Basmati",
      quantity: "300",
      actualPrice: "3200",
      expectedPrice: "3500",
      harvestDate: "2023-11-20",
      soldDate: "2023-11-25",
      profit: "-8%",
      notes: "Delayed harvest affected price",
      performance: "Below Expected",
    },
  ]);

  // Current active crops
  const [existingCrops, setExistingCrops] = useState([
    {
      id: 1,
      cropName: "Wheat",
      variety: "HD-2967",
      quantity: "500",
      expectedPrice: "2000",
      harvestDate: "2024-03-15",
      notes: "Premium quality wheat crop",
      status: "Growing",
    },
    {
      id: 2,
      cropName: "Rice",
      variety: "Basmati",
      quantity: "300",
      expectedPrice: "3500",
      harvestDate: "2024-04-20",
      notes: "Organic cultivation",
      status: "Ready for harvest",
    },
  ]);

  const [cropDetails, setCropDetails] = useState({
    cropName: "",
    variety: "",
    quantity: "",
    expectedPrice: "",
    harvestDate: "",
    image: null,
    notes: "",
    soilType: "", // New field
    irrigation: "", // New field
    fertilizer: "", // New field
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const slideVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropDetails({ ...cropDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    setCropDetails({ ...cropDetails, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit" && selectedCrop) {
      const updatedCrops = existingCrops.map((crop) =>
        crop.id === selectedCrop.id ? { ...crop, ...cropDetails } : crop
      );
      setExistingCrops(updatedCrops);
    } else {
      setExistingCrops([...existingCrops, { ...cropDetails, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setCropDetails({
      cropName: "",
      variety: "",
      quantity: "",
      expectedPrice: "",
      harvestDate: "",
      image: null,
      notes: "",
      soilType: "", // Reset new field
      irrigation: "", // Reset new field
      fertilizer: "", // Reset new field
    });
    setMode("view");
    setSelectedCrop(null);
  };

  const copyFromHistory = (crop) => {
    setCropDetails({
      cropName: crop.cropName,
      variety: crop.variety,
      quantity: crop.quantity,
      expectedPrice: crop.actualPrice, // Using previous actual price as reference
      harvestDate: "",
      notes: `Based on previous crop from ${crop.harvestDate}. Previous performance: ${crop.performance}`,
    });
    setMode("add");
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header with History Toggle */}
        <motion.div
          className="flex justify-between items-center mb-8"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-bold text-gray-800">Crop Management</h1>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                showHistory
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600"
              }`}
              onClick={() => setShowHistory(!showHistory)}
            >
              <History size={20} />
              Previous Crops
            </motion.button>
            {mode === "view" && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setMode("add")}
              >
                <Plus size={20} />
                Add New Crop
              </motion.button>
            )}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {showHistory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">
                  Previous Crop History
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cropHistory.map((crop) => (
                    <motion.div
                      key={crop.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 rounded-lg p-4 relative overflow-hidden"
                    >
                      <div
                        className={`absolute top-0 right-0 w-2 h-full ${
                          crop.performance === "Above Expected"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {crop.cropName} ({crop.variety})
                          </h3>
                          <p className="text-sm text-gray-600">
                            Harvested:{" "}
                            {new Date(crop.harvestDate).toLocaleDateString()}
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => copyFromHistory(crop)}
                          className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                          title="Use as template"
                        >
                          <Plus size={20} />
                        </motion.button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-500">
                            Expected Price
                          </p>
                          <p className="font-semibold">
                            ₹{crop.expectedPrice}/ton
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Actual Price</p>
                          <p className="font-semibold">
                            ₹{crop.actualPrice}/ton
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            crop.profit.startsWith("+")
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          Profit: {crop.profit}
                        </span>
                        <span className="text-sm text-gray-600">
                          {crop.quantity} tons
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {mode === "view" ? (
            <motion.div
              key="crop-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {existingCrops.map((crop) => (
                <motion.div
                  key={crop.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-green-600 p-4 text-white flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{crop.cropName}</h3>
                      <p className="text-sm text-green-100">{crop.variety}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => editCrop(crop)}
                      className="p-2 hover:bg-green-500 rounded-full"
                    >
                      <Edit2 size={20} />
                    </motion.button>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Quantity</p>
                        <p className="font-semibold">{crop.quantity} tons</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Expected Price</p>
                        <p className="font-semibold">
                          ₹{crop.expectedPrice}/ton
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Harvest Date</p>
                      <p className="font-semibold">
                        {new Date(crop.harvestDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Notes</p>
                      <p className="text-gray-700">{crop.notes}</p>
                    </div>
                    <div className="mt-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          crop.status === "Growing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {crop.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="crop-form"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit={{ x: "100%", opacity: 0 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto space-y-6"
              >
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {mode === "edit" ? "Edit Crop" : "Add New Crop"}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={resetForm}
                    className="p-2.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors duration-200"
                    type="button"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Crop Name
                    </label>
                    <input
                      type="text"
                      name="cropName"
                      value={cropDetails.cropName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Variety
                    </label>
                    <input
                      type="text"
                      name="variety"
                      value={cropDetails.variety}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Quantity (tons)
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={cropDetails.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Expected Price (₹/ton)
                    </label>
                    <input
                      type="number"
                      name="expectedPrice"
                      value={cropDetails.expectedPrice}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Harvest Date
                    </label>
                    <input
                      type="date"
                      name="harvestDate"
                      value={cropDetails.harvestDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Soil Type
                    </label>
                    <input
                      type="text"
                      name="soilType"
                      value={cropDetails.soilType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Irrigation
                    </label>
                    <input
                      type="text"
                      name="irrigation"
                      value={cropDetails.irrigation}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Fertilizer
                    </label>
                    <input
                      type="text"
                      name="fertilizer"
                      value={cropDetails.fertilizer}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <label className="block text-sm font-semibold text-gray-700">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={cropDetails.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 min-h-24"
                  />
                </div>

                <div className="space-y-2 mt-6">
                  <label className="block text-sm font-semibold text-gray-700">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-all duration-200"
                  />
                </div>

                <div className="flex justify-end pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition-all duration-200"
                  >
                    {mode === "edit" ? "Save Changes" : "Add Crop"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
